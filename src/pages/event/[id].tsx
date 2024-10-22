import { useRouter } from "next/router";

const EventDetail: React.FC = () => {
  const router = useRouter();
  const { id, name, sport } = router.query;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Sport: {sport}</p>
      <p>Id: {id}</p>
      <button onClick={() => router.push("/")}>Back</button>
    </div>
  );
};

export default EventDetail;
