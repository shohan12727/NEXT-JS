export const feedback = [
  {
    id: 1,
    message: "King king shohan is coming, be ready",
  },
  {
    id: 2,
    message: "King king  king shohan is coming, be prepare",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "king shohan",
  });
}
