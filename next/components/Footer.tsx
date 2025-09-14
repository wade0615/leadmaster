import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-leadmaster-dark text-white py-12">
      <div className="max-w-screen-xl mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/leadmaster_logo2.png"
                alt="Leadmaster Logo"
                width={120}
                height={48}
                className="bg-white p-1 rounded"
              />
            </div>
            <h3 className="text-xl font-bold mb-4 font-vollkorn">
              立麥餐飲設備有限公司
            </h3>
            <p className="text-gray-300 leading-relaxed">
              專注於台灣尖端的餐飲規劃設計顧問角色，為客戶提供最專業的廚房設備規劃與施工服務。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-vollkorn">
              快速連結
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  關於我們
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  專案案例
                </Link>
              </li>
              <li>
                <Link
                  href="/agent"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  代理商
                </Link>
              </li>
              <li>
                <Link
                  href="/recruitment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  人才招募
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-vollkorn">
              聯絡資訊
            </h4>
            <div className="space-y-2 text-gray-300">
              <p>電話: (02) 1234-5678</p>
              <p>傳真: (02) 1234-5679</p>
              <p>Email: bryanwu088@gmail.com</p>
              <p>地址: 台北市信義區信義路五段7號</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 立麥餐飲設備有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
