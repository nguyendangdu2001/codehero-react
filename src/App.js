import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Footer } from "./common/components/Footer";
import { ReactQueryDevtools } from "react-query/devtools";
import GetRoutes from "./config/Route/GetRoutes";
import Header from "./common/components/Header";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ position: "absolute" }} id="back-to-top-anchor" />
      <Header />
      <GetRoutes />
      <Footer />
      {/* <ScrollToTop /> */}
      {/* <Suspense fallback={null}><ScrollTopButton /></Suspense> */}
      {/* <Suspense fallback={null}>{!auth && <GoogleOneTapSignUp />}</Suspense> */}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
