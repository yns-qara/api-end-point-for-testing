// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
      {
          id: '1',
          title: 'jamal humour',
          genre: 'humour',
          date: 'Samedi 30 Aout 2022 - 16:45',
          city: 'Marrakech',
          lieu: 'Cinema megarama',
          month: '9',
          day: '19',
          price: '200',
          sold: 'false',
          reserved: 'false',
          url: '/cardB.png'

      }
      
  ]
  )
}
