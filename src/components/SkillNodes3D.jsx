import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Environment } from "@react-three/drei";
import * as THREE from "three";

const NODES = [
  { label: "GPT-4o",  pos: [0, 0, 0],       color: "#62a7ff", size: 0.18, tier: 0 },
  { label: "RAG",     pos: [1.6, 0.6, -0.3], color: "#55e6c1", size: 0.14, tier: 1 },
  { label: "Python",  pos: [-1.5, 0.9, 0.2], color: "#f5bb7b", size: 0.15, tier: 1 },
  { label: "MLflow",  pos: [1.2, -1.1, 0.5], color: "#89b8ff", size: 0.12, tier: 2 },
  { label: "FastAPI", pos: [-1.7, -0.6, -0.2], color: "#9bf4de", size: 0.13, tier: 2 },
  { label: "Next.js", pos: [0.3, 1.5, -0.2], color: "#dbeafe", size: 0.12, tier: 2 },
  { label: "Docker",  pos: [-0.5, -1.4, 0.4], color: "#62a7ff", size: 0.11, tier: 2 },
  { label: "K8s",     pos: [1.8, -0.3, 0.2], color: "#55e6c1", size: 0.11, tier: 2 },
];

const LINKS = [
  [0, 1], [0, 2], [0, 3], [0, 5],
  [1, 3], [2, 4], [2, 6], [3, 7],
  [4, 6], [5, 1], [6, 7],
];

function TechNode({ position, color, size, label, index }) {
  const meshRef = useRef();
  const baseY = position[1];
  const baseX = position[0];

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.position.y = baseY + Math.sin(t * 0.5 + index * 1.1) * 0.08;
    meshRef.current.position.x = baseX + Math.cos(t * 0.35 + index * 0.7) * 0.04;
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <sphereGeometry args={[size, 32, 32]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.15}
          metalness={0.7}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          envMapIntensity={1}
        />
      </mesh>
      <mesh scale={1.5}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.04} />
      </mesh>
      <Html
        position={[0, -(size + 0.18), 0]}
        center
        distanceFactor={5}
        style={{ pointerEvents: "none", whiteSpace: "nowrap" }}
      >
        <span
          style={{
            color: "#c8d9f0",
            fontSize: "11px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: "rgba(8, 15, 30, 0.7)",
            padding: "2px 8px",
            borderRadius: "6px",
            border: `1px solid ${color}33`,
          }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

function ConnectionLines() {
  const ref = useRef();
  const geometry = useMemo(() => {
    const pts = [];
    LINKS.forEach(([a, b]) => {
      pts.push(new THREE.Vector3(...NODES[a].pos));
      pts.push(new THREE.Vector3(...NODES[b].pos));
    });
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame(({ clock }) => {
    ref.current.material.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 0.4) * 0.03;
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#62a7ff" transparent opacity={0.1} />
    </lineSegments>
  );
}

function Pulses() {
  const ref = useRef();
  const count = 12;
  const data = useMemo(() =>
    Array.from({ length: count }, () => {
      const linkIdx = Math.floor(Math.random() * LINKS.length);
      return { linkIdx, progress: Math.random(), speed: 0.3 + Math.random() * 0.4 };
    }), []);
  const positions = useMemo(() => new Float32Array(count * 3), []);

  useFrame(({ clock }) => {
    const dt = clock.getDelta();
    const arr = ref.current.geometry.attributes.position.array;
    data.forEach((d, i) => {
      d.progress += dt * d.speed;
      if (d.progress > 1) {
        d.progress = 0;
        d.linkIdx = Math.floor(Math.random() * LINKS.length);
      }
      const [aIdx, bIdx] = LINKS[d.linkIdx];
      const a = NODES[aIdx].pos;
      const b = NODES[bIdx].pos;
      arr[i * 3] = a[0] + (b[0] - a[0]) * d.progress;
      arr[i * 3 + 1] = a[1] + (b[1] - a[1]) * d.progress;
      arr[i * 3 + 2] = a[2] + (b[2] - a[2]) * d.progress;
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#55e6c1" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

function SkillScene() {
  const group = useRef();

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.04 + pointer.x * 0.15;
    group.current.rotation.x = pointer.y * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 3, 3]} intensity={0.5} color="#62a7ff" distance={10} />
      <pointLight position={[-3, -2, 2]} intensity={0.25} color="#55e6c1" distance={8} />
      <Environment preset="night" />

      <group ref={group}>
        {NODES.map((node, i) => (
          <TechNode key={node.label} position={node.pos} color={node.color} size={node.size} label={node.label} index={i} />
        ))}
        <ConnectionLines />
        <Pulses />
      </group>
    </>
  );
}

export default function SkillNodes3D() {
  return (
    <div className="skill-nodes-canvas">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SkillScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
