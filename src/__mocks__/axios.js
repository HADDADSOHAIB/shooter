export default {
  get: jest.fn(() => Promise.resolve({ data: [{name: 'Bobo', score: 10 }, {name: 'Boba', score: 20 }]})),
  post: jest.fn((path, { user, score }) => Promise.resolve({ data: {user, score }})),
}