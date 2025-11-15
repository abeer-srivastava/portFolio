import { CrowdCanvas, Skiper39 } from "../components/ui/skiper-ui/skiper39";

// Using the complete component
const DemoSkiper39 = () => {
  return <Skiper39 />;
};

// Using just the crowd canvas
export const Crowd = () => {
  return (
    <div className="relative h-screen w-full">
      <CrowdCanvas src="/images/peeps/all-peeps.png" rows={50} cols={57} />
    </div>
  );
};
