import { rest } from 'msw'

export const handlers = [
  rest.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'hello',
      }),
    )
  }),
  rest.get('http://192.168.1.116:3006/getList', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([]),
    )
  }),
  rest.post('http://192.168.1.116:3006/getList', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([]),
    )
  }),
]