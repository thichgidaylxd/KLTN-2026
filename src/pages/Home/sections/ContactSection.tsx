import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { useReveal } from "@/components/hooks/useReveal";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section
      id="section-4"
      className="w-full bg-[#FDF6E3] py-[100px] px-[93px]"
    >
      <div ref={ref} className="flex items-start gap-20">
        <div
          className={`flex-1 transition-all duration-[800ms] ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="font-roboto text-[13px] font-semibold text-green-600 uppercase tracking-widest">
            Liên Hệ
          </span>
          <h2 className="font-playfair text-[44px] font-semibold text-[#2D3A1E] mt-3 mb-6 leading-tight">
            Bắt đầu hành trình <br />
            <span className="text-green-700">canh tác thông minh</span>
          </h2>
          <p className="font-roboto text-[15px] text-[#5A6045] leading-relaxed mb-10 max-w-[400px]">
            Đội ngũ FamerAI sẵn sàng hỗ trợ bạn từ khâu cài đặt đến vận hành.
            Liên hệ ngay để được tư vấn miễn phí.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { Icon: PhoneIcon, text: "0901 234 567" },
              { Icon: MailIcon, text: "hello@famerai.vn" },
              { Icon: MapPinIcon, text: "Đà Nẵng, Việt Nam" },
            ].map(({ Icon, text }, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 transition-all duration-[500ms] ease-out
                  ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                style={{
                  transitionDelay: visible ? `${200 + i * 100}ms` : "0ms",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-green-700" />
                </div>
                <span className="font-roboto text-[15px] text-[#2D3A1E] font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`flex-1 bg-white rounded-3xl shadow-xl p-10 border border-[#E8E0D0]
            transition-all duration-[900ms] ease-out delay-[250ms]
            ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
        >
          <h3 className="font-playfair text-[24px] font-semibold text-[#2D3A1E] mb-6">
            Gửi tin nhắn cho chúng tôi
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors"
            />
            <input
              type="email"
              placeholder="Địa chỉ email"
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors"
            />
            <textarea
              placeholder="Nội dung tin nhắn..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#D8D0C0] font-roboto text-[14px] text-[#2D3A1E] placeholder-[#A09080] focus:outline-none focus:border-green-500 transition-colors resize-none"
            />
            <Button
              fullWidth
              className="bg-[#E8C840] hover:bg-yellow-300 text-[#2D3A1E]"
            >
              Gửi tin nhắn →
            </Button>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-20 pt-8 border-t border-[#E0D8C8] flex items-center justify-between">
        <span className="font-roboto text-[13px] text-[#8A7A5A]">
          © 2025 FamerAI. All rights reserved.
        </span>
        <span className="font-roboto text-[13px] text-[#8A7A5A]">
          🌽 Trồng thông minh – Sống bền vững
        </span>
      </div>
    </section>
  );
}
