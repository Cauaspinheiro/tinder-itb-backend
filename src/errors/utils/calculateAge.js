export default function calculateYear(date) {
  return new Date().getFullYear()
  - new Date(date).getFullYear();
}
