const self = this as any
export const DEFAULT_MENU = [
  {
    label: 'ログインユーザ情報',
    handler: () => self.$route.push({ path: '/inspire' })
  },
  {
    label: '法人情報',
    handler: (): any => self.$route.path({ path: '/inspire' })
  },
  {
    label: '管理者ユーザ一覧',
    handler: (): any => self.$route.push({ path: '/inspire' })
  },
  {
    label: 'ユーザ一覧',
    handler: (): any => self.$route.push({ path: '/inspire' })
  },
  {
    label: '契約内容&支払い履歴',
    handler: (): any => self.$route.push({ path: '/inspire' })
  },
  {
    label: 'サポート（QA/お問い合わせ）',
    handler: (): any => openContactTab()
  },
  {
    label: 'PolariStationについて',
    handler: (): any => openPolariTab()
  }
]
function openContactTab() {
  window.open('https://polaristation.com/contact/corp', '_blank')
}

function openPolariTab() {
  window.open('https://polaristation.com', '_blank')
}
