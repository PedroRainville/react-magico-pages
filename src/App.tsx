import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AcceptPropertyPayment from "./pages/AcceptPropertyPayment";
import PropertyType from "./pages/PropertyType";
import PropertyExchange from "./pages/PropertyExchange";
import PropertyTypeSelection from "./pages/PropertyTypeSelection";
import PropertyLocationMap from "./pages/PropertyLocationMap";
import PropertyData from "./pages/PropertyData";
import Commission from "./pages/Commission";
import DocumentsUpload from "./pages/DocumentsUpload";
import MediaUpload from "./pages/MediaUpload";
import OwnerConfirmation from "./pages/OwnerConfirmation";
import PropertyList from "./pages/PropertyList";
import BrokerProfile from "./pages/BrokerProfile";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./pages/EditProfile";
import PrimaryAptitude from "./pages/PrimaryAptitude";
import PartnerAddress from "./pages/PartnerAddress";
import Partners from "./pages/Partners";
import SentInvites from "./pages/SentInvites";
import RegisteredPartners from "./pages/RegisteredPartners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accept-property-payment" element={<AcceptPropertyPayment />} />
          <Route path="/property-type" element={<PropertyType />} />
          <Route path="/property-exchange" element={<PropertyExchange />} />
          <Route path="/property-type-selection" element={<PropertyTypeSelection />} />
          <Route path="/property-location-map" element={<PropertyLocationMap />} />
          <Route path="/property-data" element={<PropertyData />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/documents-upload" element={<DocumentsUpload />} />
          <Route path="/media-upload" element={<MediaUpload />} />
          <Route path="/owner-confirmation" element={<OwnerConfirmation />} />
          <Route path="/property-list" element={<PropertyList />} />
          <Route path="/broker-profile" element={<BrokerProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/primary-aptitude" element={<PrimaryAptitude />} />
          <Route path="/partner-address" element={<PartnerAddress />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/sent-invites" element={<SentInvites />} />
          <Route path="/registered-partners" element={<RegisteredPartners />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
