import { IconWrapper } from '@lib/ui/icons/IconWrapper'
import { VStack } from '@lib/ui/css/stack'
import { ComponentWithChildrenProps } from '@lib/ui/props'
import { Text } from '@lib/ui/text'
import { ReactNode } from 'react'

type UploadFileInputContentProps = {
  title: ReactNode
  subTitle: ReactNode
  icon: ReactNode
} & Partial<ComponentWithChildrenProps>

export const UploadFileInputContent = ({
  title,
  subTitle,
  icon,
  children,
}: UploadFileInputContentProps) => (
  <VStack alignItems="center" gap={16}>
    <IconWrapper style={{ fontSize: 40 }}>{icon}</IconWrapper>
    <VStack alignItems="center" gap={8}>
      <Text weight="600">{title}</Text>
      <Text size={14} color="supporting">
        {subTitle}
      </Text>
      {children}
    </VStack>
  </VStack>
)
