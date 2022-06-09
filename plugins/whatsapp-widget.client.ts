export default defineNuxtPlugin(_ => {
  // @ts-ignore
  !function(){
    var e = {
        "token":"", // 78882220022
        "position":"right",
        "bottomSpacing":"20px",
        "callToActionMessage":"",
        "displayOn":"everywhere",
        "subtitle":"Ремонт квартиры быстро и качестенно.",
        "message":{"name":"HOMECRAFT","content":"Здравствуйте, хотите сделать ремонт?"}
      },
      t = document.location.protocol+"//bothelp.io",o = document.createElement("script");
    o.type="text/javascript",o.async=!0,o.src=t+"/widget-folder/widget-whatsapp-chat.js",o.onload=function(){BhWidgetWhatsappChat.init(e)};var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n)
  }();
})

