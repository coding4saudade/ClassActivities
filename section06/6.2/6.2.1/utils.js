let firstName = "Matt";
export { firstName };

export let lastName = "Thomas";

export function printFullName() {
  console.log(`${lastName}, ${firstName}`);
}

export default function signIn() {
  console.log(`Signing in user ${firstName}`);
}