import { saveName } from './actions';

export default function HomePage() {
  return (
    <main>
      <h1>Enter Your Name</h1>
      <form action={saveName}>
        <input type="text" name="name" placeholder="Your name" required />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
