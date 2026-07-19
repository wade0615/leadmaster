// 取代 vue-fb-customer-chat（Vue 2 專用套件）：直接嵌入 FB SDK
export default defineNuxtPlugin(() => {
  const chatDiv = document.createElement('div')
  chatDiv.className = 'fb-customerchat'
  chatDiv.setAttribute('page_id', '268696576492951')
  chatDiv.setAttribute('theme_color', '#6699cc')
  chatDiv.setAttribute('logged_out_greeting', '嗨~有問題可以私訊我喔！')
  chatDiv.setAttribute('logged_in_greeting', '您好，很高興為您服務')
  document.body.appendChild(chatDiv)

  window.fbAsyncInit = function () {
    // eslint-disable-next-line no-undef
    FB.init({ xfbml: true, version: 'v12.0' })
  }

  const script = document.createElement('script')
  script.async = true
  script.defer = true
  script.crossOrigin = 'anonymous'
  script.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js'
  document.body.appendChild(script)
})
