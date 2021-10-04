import Twitter from 'twitter-lite'
import axios from 'axios'
import { env } from '~/bin/dotenv'
import { request } from '~/test/util/supertest'
import { rule } from '~/routes/middleware/validation/search'

describe('/search', () => {
  // すべてのテストで利用する変数
  const mockServerOrigin = env.get('MOCK_SERVER_URL')

  // テスト向けにモックの初期化を行う
  let mockGet: jest.SpyInstance
  beforeEach(async () => {
    mockGet = jest.spyOn(Twitter.prototype, 'get')

    // モックサーバーに接続して、レスポンス内容を取得するように設定する
    const value = await axios.get(`${mockServerOrigin}/search/tweets`)
    mockGet.mockResolvedValue(value)
  })

  describe('/search/tweets', () => {
    test('正常なリクエスト（キーワードのみ指定）', async () => {
      const parameter = new URLSearchParams({ q: 'test' }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(200)
    })

    test('正常なリクエスト（すべてのオプションを指定）', async () => {
      const parameter = new URLSearchParams({
        q: 'test',
        count: '30',
        max_id: '967574182522482687',
      }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(200)
    })

    test('キーワードの指定がない', async () => {
      const response = await request.get('/search/tweets')

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })

    test('キーワードが空文字', async () => {
      const parameter = new URLSearchParams({ q: '' }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })

    test('キーワードが規定数をオーバーしている', async () => {
      const query = 'テスト'.repeat(rule.query.max + 1)
      const parameter = new URLSearchParams({ q: query }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })

    test('取得数が正常な範囲内（1件〜100件）', () => {
      /**
       * 二つの間に存在する整数をランダムに取得する
       * @param min 最小値
       * @param max 最大値
       * @returns 整数
       * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
       */
      const getRandomIntInclusive = (min: number, max: number) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
      }

      // 最小値・最大値・サンプルとして抽出された値それぞれを用いてテストを行う
      const rule = {
        min: 1,
        max: 100,
      }
      const counts = [
        rule.min,
        getRandomIntInclusive(rule.min + 1, rule.max - 1), // 最小値・最大値を除くランダムな値
        rule.max,
      ]

      counts.map(async (count) => {
        const parameter = new URLSearchParams({
          q: 'test',
          count: count.toString(),
        }).toString()

        const response = await request.get(`/search/tweets?${parameter}`)

        expect(response.statusCode).toEqual(200)
      })
    })

    test('取得数が1件未満', async () => {
      const count = 0
      const parameter = new URLSearchParams({
        q: 'test',
        count: count.toString(),
      }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })

    test('取得数が101件以上', async () => {
      const count = 101
      const parameter = new URLSearchParams({
        q: 'test',
        count: count.toString(),
      }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })

    test('max_idが文字列で指定されている', async () => {
      const maxId = '967574182522482687'
      const parameter = new URLSearchParams({
        q: 'test',
        max_id: maxId,
      }).toString()

      const response = await request.get(`/search/tweets?${parameter}`)

      expect(response.statusCode).toEqual(200)
    })

    test('max_idがオブジェクトとしてパースされる文字列で指定されている', async () => {
      const maxId = '967574182522482687'

      // 書式が特殊なため、URLSearchParamsは扱わず文字列で表現する
      const response = await request.get(
        `/search/tweets?q=test&max_id[]=${maxId}&max_id[test]=${maxId}`,
      )

      expect(response.statusCode).toEqual(400)
      expect(response.body.error).toBe('Bad Request')
    })
  })
})