import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// ─── Colour palette ───────────────────────────────────────────────────────────
const C = {
  skin:        "#c8845a",
  skinDeep:    "#a86840",
  skinDark:    "#8a5430",
  hair:        "#0e0e1a",
  beard:       "#131320",
  glassFrame:  "#bfd4ff",
  glassLens:   "#baf6ea",
  shirt:       "#091221",
  shirtDetail: "#14314a",
  eyeWhite:    "#f0ede8",
  iris:        "#2a3860",
  pupil:       "#040410",
  lip:         "#a07060",
  noseTip:     "#ba7858",
};

// ─── Character ────────────────────────────────────────────────────────────────
function Character({ mouse }) {
  const rootRef = useRef();
  const headRef = useRef();
  const rot = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!headRef.current || !rootRef.current) return;
    rot.current.y = THREE.MathUtils.lerp(rot.current.y,  mouse.current.x *  0.42, 0.055);
    rot.current.x = THREE.MathUtils.lerp(rot.current.x, -mouse.current.y * 0.22, 0.055);
    headRef.current.rotation.y = rot.current.y;
    headRef.current.rotation.x = rot.current.x;
    rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, mouse.current.x * 0.05, 0.03);
  });

  // ── Materials ──────────────────────────────────────────────────────────────
  const mSkin = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: C.skin, roughness: 0.52, metalness: 0, clearcoat: 0.22, clearcoatRoughness: 0.45,
  }), []);
  const mSkinDeep = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: C.skinDeep, roughness: 0.58, metalness: 0, clearcoat: 0.1,
  }), []);
  const mSkinDark = useMemo(() => new THREE.MeshStandardMaterial({ color: C.skinDark, roughness: 0.65 }), []);
  const mHair  = useMemo(() => new THREE.MeshStandardMaterial({ color: C.hair,  roughness: 0.88 }), []);
  const mBeard = useMemo(() => new THREE.MeshStandardMaterial({ color: C.beard, roughness: 0.84 }), []);
  const mFrame = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: C.glassFrame, roughness: 0.18, metalness: 0.85,
  }), []);
  const mLens  = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: C.glassLens, roughness: 0.04, metalness: 0,
    transparent: true, opacity: 0.28,
    emissive: "#5ce6c7", emissiveIntensity: 0.09,
  }), []);
  const mShirt = useMemo(() => new THREE.MeshStandardMaterial({ color: C.shirt, roughness: 0.82 }), []);
  const mShirtD= useMemo(() => new THREE.MeshStandardMaterial({ color: C.shirtDetail, roughness: 0.78 }), []);
  const mWhite = useMemo(() => new THREE.MeshStandardMaterial({ color: C.eyeWhite, roughness: 0.42 }), []);
  const mIris  = useMemo(() => new THREE.MeshStandardMaterial({
    color: C.iris, roughness: 0.18, emissive: "#1a2a50", emissiveIntensity: 0.3,
  }), []);
  const mPupil = useMemo(() => new THREE.MeshStandardMaterial({ color: C.pupil, roughness: 0.08 }), []);
  const mCatch = useMemo(() => new THREE.MeshBasicMaterial({ color: "#ffffff" }), []);
  const mLip   = useMemo(() => new THREE.MeshStandardMaterial({ color: C.lip, roughness: 0.62 }), []);
  const mNose  = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: C.noseTip, roughness: 0.5, clearcoat: 0.12,
  }), []);
  const mNostril = useMemo(() => new THREE.MeshStandardMaterial({ color: "#7a4828", roughness: 0.7 }), []);

  // ── Helper to reuse sphere geometry ───────────────────────────────────────
  const S = (args, detail = 20) => <sphereGeometry args={[...args, detail, detail]} />;

  // ── One eye (position already offset; side = +1 or -1 for x mirror) ───────
  function Eye({ x }) {
    const ey = 0.8, ez = 0.88;
    return (
      <>
        {/* Eyeball */}
        <mesh material={mWhite} position={[x, ey, ez]} scale={[0.25, 0.23, 0.14]}>
          {S([1])}
        </mesh>
        {/* Iris */}
        <mesh material={mIris} position={[x, ey, ez + 0.10]} scale={[0.15, 0.15, 0.06]}>
          {S([1])}
        </mesh>
        {/* Pupil */}
        <mesh material={mPupil} position={[x, ey, ez + 0.15]} scale={[0.08, 0.08, 0.03]}>
          {S([1], 12)}
        </mesh>
        {/* Catchlight */}
        <mesh material={mCatch} position={[x - 0.04 * Math.sign(x), ey + 0.04, ez + 0.17]} scale={[0.03, 0.03, 0.01]}>
          {S([1], 8)}
        </mesh>
        {/* Upper eyelid */}
        <mesh material={mSkinDeep} position={[x, ey + 0.06, ez + 0.1]} rotation={[0.35, 0, 0]} scale={[0.26, 0.07, 0.06]}>
          {S([1], 12)}
        </mesh>
        {/* Lower eyelid shadow */}
        <mesh material={mSkinDark} position={[x, ey - 0.06, ez + 0.09]} rotation={[-0.2, 0, 0]} scale={[0.25, 0.04, 0.05]}>
          {S([1], 10)}
        </mesh>
      </>
    );
  }

  // ── One glasses lens group ─────────────────────────────────────────────────
  function GlassLens({ x }) {
    return (
      <group position={[x, 0.8, 0.94]} scale={[1.28, 1.0, 1.0]}>
        {/* Frame ring */}
        <mesh material={mFrame}>
          <torusGeometry args={[0.22, 0.028, 10, 30]} />
        </mesh>
        {/* Lens fill */}
        <mesh material={mLens} position={[0, 0, 0.005]}>
          <circleGeometry args={[0.215, 30]} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={rootRef} position={[0, -0.55, 0]}>
      <Float speed={1.5} rotationIntensity={0.09} floatIntensity={0.32}>

        {/* ── HEAD GROUP (cursor-tracked) ────────────────────────────────── */}
        <group ref={headRef}>

          {/* Head */}
          <mesh material={mSkin} position={[0, 0.6, 0]} scale={[1.0, 1.06, 0.94]}>
            {S([1.06], 40)}
          </mesh>

          {/* Forehead */}
          <mesh material={mSkin} position={[0, 1.28, 0.28]} scale={[0.82, 0.34, 0.38]}>
            {S([1])}
          </mesh>

          {/* Cheekbones */}
          <mesh material={mSkin} position={[-0.72, 0.44, 0.65]} scale={[0.28, 0.2, 0.22]}>
            {S([1], 12)}
          </mesh>
          <mesh material={mSkin} position={[ 0.72, 0.44, 0.65]} scale={[0.28, 0.2, 0.22]}>
            {S([1], 12)}
          </mesh>

          {/* Ears */}
          <mesh material={mSkin} position={[-1.03, 0.55, 0]} scale={[0.15, 0.28, 0.13]}>
            {S([1], 16)}
          </mesh>
          <mesh material={mSkin} position={[ 1.03, 0.55, 0]} scale={[0.15, 0.28, 0.13]}>
            {S([1], 16)}
          </mesh>
          {/* Ear inner */}
          <mesh material={mSkinDark} position={[-1.1, 0.55, 0.02]} scale={[0.06, 0.16, 0.07]}>
            {S([1], 10)}
          </mesh>
          <mesh material={mSkinDark} position={[ 1.1, 0.55, 0.02]} scale={[0.06, 0.16, 0.07]}>
            {S([1], 10)}
          </mesh>

          {/* ── HAIR ────────────────────────────────────────────────────── */}
          {/* Cap / top dome */}
          <mesh material={mHair} position={[0, 1.28, -0.06]} scale={[1.09, 0.48, 1.01]}>
            {S([1], 28)}
          </mesh>
          {/* Crown volume */}
          <mesh material={mHair} position={[0, 1.46, 0.0]} scale={[0.9, 0.3, 0.86]}>
            {S([1], 20)}
          </mesh>
          {/* Left side */}
          <mesh material={mHair} position={[-0.9, 1.0, -0.04]} scale={[0.26, 0.5, 0.34]}>
            {S([1], 14)}
          </mesh>
          {/* Right side */}
          <mesh material={mHair} position={[ 0.9, 1.0, -0.04]} scale={[0.26, 0.5, 0.34]}>
            {S([1], 14)}
          </mesh>
          {/* Back */}
          <mesh material={mHair} position={[0, 0.84, -0.8]} scale={[0.96, 0.62, 0.4]}>
            {S([1], 20)}
          </mesh>
          {/* Front / fringe */}
          <mesh material={mHair} position={[0, 1.42, 0.44]} scale={[0.8, 0.18, 0.3]}>
            {S([1], 14)}
          </mesh>
          {/* Fringe side tufts */}
          <mesh material={mHair} position={[-0.52, 1.38, 0.54]} scale={[0.22, 0.16, 0.2]}>
            {S([1], 12)}
          </mesh>
          <mesh material={mHair} position={[ 0.52, 1.38, 0.54]} scale={[0.22, 0.16, 0.2]}>
            {S([1], 12)}
          </mesh>
          {/* Hairline strip */}
          <mesh material={mHair} position={[0, 1.6, 0.5]} scale={[0.62, 0.12, 0.2]}>
            {S([1], 10)}
          </mesh>

          {/* ── EYEBROWS ────────────────────────────────────────────────── */}
          <mesh material={mHair} position={[-0.38, 0.99, 0.87]} rotation={[0.1, 0, 0.2]} scale={[0.27, 0.068, 0.09]}>
            {S([1], 12)}
          </mesh>
          <mesh material={mHair} position={[ 0.38, 0.99, 0.87]} rotation={[0.1, 0, -0.2]} scale={[0.27, 0.068, 0.09]}>
            {S([1], 12)}
          </mesh>

          {/* ── EYES ────────────────────────────────────────────────────── */}
          <Eye x={-0.37} />
          <Eye x={ 0.37} />

          {/* ── GLASSES ─────────────────────────────────────────────────── */}
          <GlassLens x={-0.37} />
          <GlassLens x={ 0.37} />
          {/* Bridge */}
          <mesh material={mFrame} position={[0, 0.8, 0.98]} scale={[0.11, 0.025, 0.025]}>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
          {/* Nose pads */}
          <mesh material={mFrame} position={[-0.08, 0.74, 0.98]} scale={[0.025, 0.035, 0.025]}>
            {S([1], 6)}
          </mesh>
          <mesh material={mFrame} position={[ 0.08, 0.74, 0.98]} scale={[0.025, 0.035, 0.025]}>
            {S([1], 6)}
          </mesh>
          {/* Temple arms */}
          <mesh material={mFrame} position={[-0.66, 0.8, 0.6]} rotation={[0, 0.38, 0]} scale={[0.025, 0.02, 0.38]}>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>
          <mesh material={mFrame} position={[ 0.66, 0.8, 0.6]} rotation={[0, -0.38, 0]} scale={[0.025, 0.02, 0.38]}>
            <boxGeometry args={[1, 1, 1]} />
          </mesh>

          {/* ── NOSE ─────────────────────────────────────────────────────── */}
          {/* Bridge */}
          <mesh material={mSkin} position={[0, 0.64, 0.99]} scale={[0.07, 0.13, 0.08]}>
            {S([1], 12)}
          </mesh>
          {/* Tip */}
          <mesh material={mNose} position={[0, 0.51, 1.03]} scale={[0.11, 0.1, 0.1]}>
            {S([1], 14)}
          </mesh>
          {/* Nostrils */}
          <mesh material={mNostril} position={[-0.09, 0.49, 0.99]} scale={[0.055, 0.048, 0.055]}>
            {S([1], 8)}
          </mesh>
          <mesh material={mNostril} position={[ 0.09, 0.49, 0.99]} scale={[0.055, 0.048, 0.055]}>
            {S([1], 8)}
          </mesh>

          {/* ── MOUTH ───────────────────────────────────────────────────── */}
          <mesh material={mLip} position={[0, 0.30, 0.97]} scale={[0.22, 0.068, 0.07]}>
            {S([1], 12)}
          </mesh>
          <mesh material={mLip} position={[0, 0.23, 0.97]} scale={[0.2, 0.062, 0.07]}>
            {S([1], 12)}
          </mesh>

          {/* ── BEARD ───────────────────────────────────────────────────── */}
          {/* Chin main */}
          <mesh material={mBeard} position={[0, -0.1, 0.73]} scale={[0.62, 0.5, 0.5]}>
            {S([1], 20)}
          </mesh>
          {/* Chin lower */}
          <mesh material={mBeard} position={[0, -0.32, 0.54]} scale={[0.54, 0.42, 0.44]}>
            {S([1], 18)}
          </mesh>
          {/* Cheek left */}
          <mesh material={mBeard} position={[-0.62, 0.16, 0.54]} scale={[0.32, 0.46, 0.3]}>
            {S([1], 16)}
          </mesh>
          {/* Cheek right */}
          <mesh material={mBeard} position={[ 0.62, 0.16, 0.54]} scale={[0.32, 0.46, 0.3]}>
            {S([1], 16)}
          </mesh>
          {/* Jaw left */}
          <mesh material={mBeard} position={[-0.7, -0.08, 0.38]} scale={[0.23, 0.4, 0.28]}>
            {S([1], 14)}
          </mesh>
          {/* Jaw right */}
          <mesh material={mBeard} position={[ 0.7, -0.08, 0.38]} scale={[0.23, 0.4, 0.28]}>
            {S([1], 14)}
          </mesh>
          {/* Mustache left */}
          <mesh material={mBeard} position={[-0.14, 0.34, 0.99]} scale={[0.18, 0.09, 0.1]}>
            {S([1], 12)}
          </mesh>
          {/* Mustache right */}
          <mesh material={mBeard} position={[ 0.14, 0.34, 0.99]} scale={[0.18, 0.09, 0.1]}>
            {S([1], 12)}
          </mesh>
          {/* Soul patch + under-lip */}
          <mesh material={mBeard} position={[0, 0.14, 0.94]} scale={[0.14, 0.12, 0.09]}>
            {S([1], 10)}
          </mesh>
          <mesh material={mBeard} position={[0, 0.07, 0.92]} scale={[0.28, 0.1, 0.09]}>
            {S([1], 10)}
          </mesh>

        </group>

        {/* ── BODY ──────────────────────────────────────────────────────── */}
        {/* Neck */}
        <mesh material={mSkin} position={[0, -0.44, 0.05]} scale={[0.27, 0.26, 0.23]}>
          <cylinderGeometry args={[1, 1.1, 1, 18]} />
        </mesh>
        {/* Torso */}
        <mesh material={mShirt} position={[0, -1.2, 0]} scale={[0.9, 0.76, 0.58]}>
          {S([1], 24)}
        </mesh>
        {/* Shoulders */}
        <mesh material={mShirt} position={[-0.94, -0.9, 0]} scale={[0.38, 0.27, 0.28]}>
          {S([1], 16)}
        </mesh>
        <mesh material={mShirt} position={[ 0.94, -0.9, 0]} scale={[0.38, 0.27, 0.28]}>
          {S([1], 16)}
        </mesh>
        {/* Arms */}
        <mesh material={mShirt} position={[-1.14, -1.3, 0.04]} rotation={[0, 0, -0.28]} scale={[0.22, 0.4, 0.22]}>
          {S([1], 16)}
        </mesh>
        <mesh material={mShirt} position={[ 1.14, -1.3, 0.04]} rotation={[0, 0,  0.28]} scale={[0.22, 0.4, 0.22]}>
          {S([1], 16)}
        </mesh>
        {/* Collar */}
        <mesh material={mShirtD} position={[0, -0.64, 0.38]} rotation={[0.42, 0, 0]} scale={[0.28, 0.22, 0.06]}>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>

      </Float>
    </group>
  );
}

// ─── Scene / lighting ────────────────────────────────────────────────────────
function Scene({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.22} color="#182647" />

      <directionalLight position={[3.5, 6, 4]} intensity={1.9} color="#fff6e0" />

      <directionalLight position={[-3.5, 3, 2]} intensity={0.55} color="#c8dcff" />

      <pointLight position={[0, -2.5, 3.5]} intensity={3.2} color="#00e8c4" distance={14} decay={2} />

      <pointLight position={[-2, 0.5, 3]} intensity={0.7} color="#4aa8ff" distance={9} decay={2} />

      <pointLight position={[2.3, 1.5, -1.6]} intensity={0.45} color="#ffd7ae" distance={7} decay={2} />

      <Environment preset="night" environmentIntensity={0.35} />

      <Character mouse={mouse} />

      <ContactShadows
        position={[0, -2.9, 0]}
        opacity={0.35}
        scale={5}
        blur={2.8}
        far={4.2}
        color="#000814"
      />
    </>
  );
}

// ─── Public component ────────────────────────────────────────────────────────
export default function Character3D() {
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef();

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouse.current.x = ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse.current.y = ((e.clientY - rect.top)  / rect.height) * 2 - 1;
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { mouse.current.x = 0; mouse.current.y = 0; }}
      className="h-full w-full"
      style={{ minHeight: 460 }}
    >
      <Canvas
        camera={{ position: [0, 0.18, 4.9], fov: 36 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        style={{ background: "transparent" }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
