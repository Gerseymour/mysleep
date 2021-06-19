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
      ctx.json([{ _id: 1, habit: 'habit2', deepSleepTotal: 20, count: 1 },
      { _id: 2, habit: 'habit1', deepSleepTotal: 20, count: 5 }]),
    )
  }),
  rest.post('http://192.168.1.116:3006/getData', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([]),
    )
  }),
]

export const handlers2 = [
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
      ctx.json([{ _id: 1, habit: 'habit3', deepSleepTotal: 1, count: 1 }]),
    )
  }),
  rest.post('http://192.168.1.116:3006/getData', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([]),
    )
  }),
]
