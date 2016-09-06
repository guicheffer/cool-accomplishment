export default () => {
  return (process.env.NODE_ENV === 'production' || (location && location.hostname !== 'localhost'));
}
