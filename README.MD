# LogicRom

This is a tool for creating rom scripts

You only need node.js and using
`npm install node.js`

and for using with LogicWorld you need to add a component similar to this for an 256 Bytes 8 bit address rom:

```text
Rom8x8:
    column: "Logic"
    prefab:
        blocks:
            -
                scale: (8, 1, 1)
                position: (0.5, 0, 0)
        inputs:
            -
                position: (4, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (3, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (2, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (1, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (0, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (-1, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (-2, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
            -
                position: (-3, 0.5, -0.5)
                rotation: (-90, 0, 0)
                length: 0.6
        outputs:
            -
                position: (4, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (3, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (2, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (1, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (0, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (-1, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (-2, 0.5, 0.5)
                rotation: (90, 0, 0)
            -
                position: (-3, 0.5, 0.5)
                rotation: (90, 0, 0)
    logicScript: rom
    placingRules:
        offsetDimensions: (8, 1)
        gridPlacingDimensions: (8, 2)
        allowFineRotation: false
        canBeFlipped: true
        flippingPointHeight: 0.5
```
