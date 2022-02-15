const enum EMAIL_ERROR_MESSAGE {
  IsEmpty = 'メールアドレスは必須項目です',
  Max = 'メールアドレスは255文字以下で入力してください',
  IsEmail = 'メールアドレス形式で入力してください',
}

const enum PASSWORD_ERROR_MESSAGE {
  IsEmpty = 'パスワードは必須項目です',
  Max = 'パスワードは255文字以下で入力してください',
}

export { EMAIL_ERROR_MESSAGE, PASSWORD_ERROR_MESSAGE }
