import React from 'react'
import { set, unset } from 'sanity'
import { Stack, Checkbox, Flex, Text } from '@sanity/ui'

const allSizes = ['S', 'M', 'L', 'XL', 'XXL']

export default function SizesInput(props: any) {
    const { value = [], onChange } = props

    const handleToggle = (size: string) => {
        const newValue = value.includes(size)
            ? value.filter((s: string) => s !== size)
            : [...value, size]
        onChange(newValue.length ? set(newValue) : unset())
    }

    const toggleAll = () => {
        const isAllSelected = allSizes.every((size) => value.includes(size))
        onChange(isAllSelected ? unset() : set(allSizes))
    }

    return (
        <Stack space={3}>
            <Flex align="center" gap={2}>
                <Checkbox
                    checked={allSizes.every((size) => value.includes(size))}
                    onChange={toggleAll}
                />
                <Text>Select All Sizes</Text>
            </Flex>

            {allSizes.map((size) => (
                <Flex key={size} align="center" gap={2}>
                    <Checkbox
                        checked={value.includes(size)}
                        onChange={() => handleToggle(size)}
                    />
                    <Text>{size}</Text>
                </Flex>
            ))}
        </Stack>
    )
}
