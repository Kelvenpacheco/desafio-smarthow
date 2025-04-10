import ListUsers from "@/component/listUsers/listUsers";
import UsersDirectory from "@/component/users/usersDiretory";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <UsersDirectory />
      <ListUsers />
    </div>
  );
}
