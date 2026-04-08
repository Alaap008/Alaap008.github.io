import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore({ mouse }) {
  const group = useRef();
  const sphere = useRef();
  const wireframe = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.08 + mouse.current[0] * 0.15;
    group.current.rotation.x = Math.sin(t * 0.12) * 0.1 + mouse.current[1] * 0.1;
    wireframe.current.rotation.y = -t * 0.04;
    wireframe.current.rotation.z = t * 0.06;
  });

  return (
    <group ref={group}>
      <mesh ref={sphere}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshPhysicalMaterial
          color="#4a8eff"
          emissive="#1a4fd4"
          emissiveIntensity={0.35}
          roughness={0.08}
          metalness={0.92}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
          transparent
          opacity={0.92}
        />
      </mesh>
      <mesh ref={wireframe} scale={1.55}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color="#62a7ff" wireframe transparent opacity={0.08} />
      </mesh>
      <mesh scale={1.05}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshPhysicalMaterial
          color="#55e6c1"
          roughness={0.1}
          metalness={0.1}
          transmission={0.95}
          thickness={0.5}
          ior={1.5}
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

function NeuralNetwork() {
  const groupRef = useRef();
  const LAYERS = [4, 6, 8, 6, 4];
  const LAYER_SPACING = 1.1;

  const { nodes, connections } = useMemo(() => {
    const n = [];
    const c = [];
    let id = 0;

    LAYERS.forEach((count, layerIdx) => {
      const x = (layerIdx - (LAYERS.length - 1) / 2) * LAYER_SPACING;
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 0.55;
        const z = (Math.random() - 0.5) * 0.4;
        n.push({ id: id++, pos: [x, y, z], layer: layerIdx });
      }
    });

    let nodeIdx = 0;
    for (let l = 0; l < LAYERS.length - 1; l++) {
      const currentStart = nodeIdx;
      const currentCount = LAYERS[l];
      const nextStart = currentStart + currentCount;
      const nextCount = LAYERS[l + 1];
      for (let i = 0; i < currentCount; i++) {
        const connectCount = Math.min(3, nextCount);
        const indices = Array.from({ length: nextCount }, (_, k) => k);
        for (let j = 0; j < connectCount; j++) {
          const pick = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
          c.push([currentStart + i, nextStart + pick]);
        }
      }
      nodeIdx += currentCount;
    }

    return { nodes: n, connections: c };
  }, []);

  const lineGeometry = useMemo(() => {
    const points = [];
    connections.forEach(([a, b]) => {
      points.push(new THREE.Vector3(...nodes[a].pos));
      points.push(new THREE.Vector3(...nodes[b].pos));
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodes, connections]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.03;
    groupRef.current.rotation.x = Math.sin(t * 0.08) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, 0, -0.5]} scale={0.85}>
      {nodes.map((node) => {
        const isMiddle = node.layer === 2;
        const size = isMiddle ? 0.065 : 0.048;
        const color = isMiddle ? "#55e6c1" : "#62a7ff";
        return (
          <mesh key={node.id} position={node.pos}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.8}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        );
      })}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#4a8eff" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

function DataFlow({ count = 24 }) {
  const ref = useRef();
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 2.2 + Math.random() * 1.2,
      speed: 0.2 + Math.random() * 0.3,
      y: (Math.random() - 0.5) * 2.5,
      size: 0.015 + Math.random() * 0.02,
    }));
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);
  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    data.forEach((d, i) => { s[i] = d.size; });
    return s;
  }, [count, data]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const arr = ref.current.geometry.attributes.position.array;
    data.forEach((d, i) => {
      const a = d.angle + t * d.speed;
      arr[i * 3] = Math.cos(a) * d.radius;
      arr[i * 3 + 1] = d.y + Math.sin(t * 0.5 + i) * 0.15;
      arr[i * 3 + 2] = Math.sin(a) * d.radius;
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#55e6c1" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function OrbitBand({ radius, speed, tilt, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * speed;
  });
  return (
    <group rotation={[tilt, 0, 0]}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.008, 16, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

function MouseTracker({ mouse }) {
  const { viewport } = useThree();
  useFrame(({ pointer }) => {
    mouse.current[0] = (pointer.x * viewport.width) / 6;
    mouse.current[1] = (pointer.y * viewport.height) / 6;
  });
  return null;
}

function Scene({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#c4dbff" />
      <pointLight position={[-3, 2, 4]} intensity={0.5} color="#62a7ff" distance={12} />
      <pointLight position={[2, -3, 3]} intensity={0.3} color="#55e6c1" distance={10} />
      <Environment preset="night" />
      <MouseTracker mouse={mouse} />

      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.3}>
        <NeuralCore mouse={mouse} />
      </Float>
      <NeuralNetwork />
      <DataFlow count={30} />

      <OrbitBand radius={2.6} speed={0.08} tilt={0.7} color="#62a7ff" />
      <OrbitBand radius={3.1} speed={-0.06} tilt={-0.4} color="#55e6c1" />
    </>
  );
}

export default function HeroScene3D() {
  const mouse = useRef([0, 0]);

  return (
    <div className="hero-3d-canvas">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene mouse={mouse} />
        </Suspense>
      </Canvas>
      <div className="hero-3d-glow" />
    </div>
  );
}
