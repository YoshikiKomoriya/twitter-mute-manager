/**
 * ライブラリ'jest-express'のファイルを拡張したもの
 */
import {
  Request,
  IRequestOptions,
  IRequest,
  Session,
} from 'jest-express/lib/request'

/**
 * リクエスト情報の拡張
 * 以下の情報を格納するようにしている
 * - セッション情報
 */
class RequestWithSession extends Request implements IRequest {
  session: Session

  // Requestクラス内からコンストラクタの記載をコピーしている
  constructor(url?: string | null, options?: IRequestOptions) {
    super(url, options)
    this.session = {}
  }
}

export { RequestWithSession }
