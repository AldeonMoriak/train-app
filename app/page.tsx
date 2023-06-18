import Button from "@/components/Button/Button";

export default async function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      No Plan Yet
      <Button label="Add Plan" href="/plan" />
    </div>
  );
}
