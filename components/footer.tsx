import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Logo from "@/assets/favicon.png"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img src={Logo.src} alt="Logo" className="h-10" />
              <span className="font-bold text-xl font-['Poppins']">PhuGuide</span>
            </Link>
            <p className="text-gray-400 mb-4">
              ค้นพบภูเก็ตผ่านการผจญภัยแบบเกมและประสบการณ์ที่น่าทึ่ง
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>


          <div>
            <h3 className="font-semibold text-lg mb-4">สำรวจ</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/explore" className="hover:text-white">
                  สถานที่ท่องเที่ยว
                </Link>
              </li>
              <li>
                <Link href="/missions" className="hover:text-white">
                  ภารกิจ
                </Link>
              </li>
              <li>
                <Link href="/trip-planner" className="hover:text-white">
                  วางแผนการเดินทาง
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  เกี่ยวกับภูเก็ต
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">ชุมชน</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/leaderboard" className="hover:text-white">
                  กระดานผู้นำ
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="hover:text-white">
                  รางวัล
                </Link>
              </li>
              <li>
                <Link href="/minigames" className="hover:text-white">
                  มินิเกม
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-white">
                  โปรไฟล์
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">การสนับสนุน</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  ศูนย์ช่วยเหลือ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  นโยบายความเป็นส่วนตัว
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  ข้อกำหนดในการให้บริการ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ภูเก็ต ทราเวล แอดไวเซอร์ สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  )
}
