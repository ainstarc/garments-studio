// components/ColorSelector.tsx
import React from 'react'
import { set, unset, PatchEvent } from 'sanity'
import {
    Card,
    Grid,
    Text,
    Box,
    Flex,
    Stack,
    Checkbox
} from '@sanity/ui'

type ColorOption = {
    label: string
    value: string
}

type Props = {
    value?: string[]
    onChange: (patch: PatchEvent) => void
}

const colorOptions: ColorOption[] = [
    { label: 'Red', value: '#FF0000' },
    { label: 'Green', value: '#00FF00' },
    { label: 'Blue', value: '#0000FF' },
    { label: 'Black', value: '#000000' },
    { label: 'White', value: '#FFFFFF' },
    { label: 'Yellow', value: '#FFFF00' },
    { label: 'Orange', value: '#FFA500' },
    { label: 'Purple', value: '#800080' },
    { label: 'Pink', value: '#FFC0CB' },
    { label: 'Brown', value: '#A52A2A' }
]

export default function ColorSelector({ value = [], onChange }: Props) {
    const toggleColor = (color: string) => {
        const nextValue = value.includes(color)
            ? value.filter((v) => v !== color)
            : [...value, color]

        const patch = nextValue.length ? PatchEvent.from(set(nextValue)) : PatchEvent.from(unset())
        onChange(patch)
    }

    return (
        <Grid columns={[2, 3, 4]} gap={3}>
            {colorOptions.map((opt) => {
                const selected = value.includes(opt.value)
                return (
                    <Card
                        key={opt.value}
                        padding={3}
                        radius={2}
                        shadow={1}
                        tone={selected ? 'primary' : 'default'}
                        onClick={() => toggleColor(opt.value)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Flex align="center" gap={3}>
                            <Checkbox checked={selected} readOnly />
                            <Stack space={1}>
                                <Text size={1}>{opt.label}</Text>
                                <Box
                                    style={{
                                        width: '1rem',
                                        height: '1rem',
                                        borderRadius: '50%',
                                        backgroundColor: opt.value,
                                        border: '1px solid #ccc'
                                    }}
                                />
                            </Stack>
                        </Flex>
                    </Card>
                )
            })}
        </Grid>
    )
}
