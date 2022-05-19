import Heading from "../layout/Heading";

export default function DashboardLayout({ children }) {
  <>
    <Heading title="Admin">
      {children ? children : <p>Select a section</p>}
    </Heading>
  </>;
}
