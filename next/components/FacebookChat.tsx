"use client";

import { useEffect } from "react";

export default function FacebookChat() {
  useEffect(() => {
    // Facebook Customer Chat SDK
    const script = document.createElement("script");
    script.innerHTML = `
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    `;
    document.head.appendChild(script);

    // Facebook Customer Chat Plugin
    const chatScript = document.createElement("script");
    chatScript.innerHTML = `
      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="YOUR_PAGE_ID"
        theme_color="#DA1B0A"
        logged_in_greeting="您好！有什麼可以為您服務的嗎？"
        logged_out_greeting="您好！有什麼可以為您服務的嗎？">
      </div>
    `;
    document.body.appendChild(chatScript);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (chatScript.parentNode) {
        chatScript.parentNode.removeChild(chatScript);
      }
    };
  }, []);

  return null;
}
