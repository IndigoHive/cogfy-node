import { Cogfy } from './cogfy'

const cogfy = new Cogfy({
  apiKey: ''
})

async function testRequest() {
  const result = await cogfy.records.create()

  console.log('RESULT :: ', result)
}

void testRequest()
