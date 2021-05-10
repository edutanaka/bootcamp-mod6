import styled from 'styled-components'
import Button from '@edutanaka/ui/src/components/Button'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Button>
        hello
      </Button>
      <Title>
        My page
      </Title>
    </div>
  )
}
