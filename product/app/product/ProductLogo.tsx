import { DatabaseIcon } from '@lib/ui/icons/DatabaseIcon'
import { Text } from '@lib/ui/text'

export const ProductLogo = () => (
  <Text centerVertically={{ gap: 8 }} color="contrast" size={22} weight={600}>
    <DatabaseIcon />
    Distributed Storage
  </Text>
)
