import { Float } from '@react-three/drei'
import React, { forwardRef } from 'react'
import { SodaCan } from './SodaCan'
import { Group } from 'three'

interface FloatinCanProps { };

const FloatingCan = forwardRef<Group, FloatinCanProps>((props: FloatinCanProps) => {
    return (
        <group>
            <Float speed={10}
                rotationIntensity={1}
                floatIntensity={1}
                floatingRange={[-0.1, 0.1]} >
                <SodaCan />
            </Float>
        </group>
    )
})

FloatingCan.displayName = "FloatingCan"
export default FloatingCan;
