import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./providers";
import ToastProvider from "@/components/ToastProvider";

export const metadata = {
  title: "Ngọc Rồng Online",
  description: "Diễn đàn Ngọc Rồng Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Providers>
          <ToastProvider />
          <div className="nro-page">
            <div className="d-flex flex-column min-vh-100">
              <Header />

              <main className="flex-grow-1 pb-2">
                <>
                  <Hero />
                </>
                <div className="container-nro ">
                  <div className="px-2 px-md-0 w-100">
                    <div className="container-nro overflow-hidden">
                      <div className="row g-4">
                        {/* MAIN */}
                        <div className="col-12 col-lg">
                          <div className="d-flex flex-column gap-3 ">{children}</div>
                        </div>

                        {/* SIDEBAR */}
                        <div className="col-12 col-lg-4 col-xl-auto sidebar-column">
                          <Sidebar />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
