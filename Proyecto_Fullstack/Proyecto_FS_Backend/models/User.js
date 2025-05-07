import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  secondName: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;
