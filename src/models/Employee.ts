import mongoose, { Schema, model, models } from 'mongoose';

const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  position: { type: String },
  department: { type: String },
  dateJoined: { type: Date, default: Date.now },
});

export const Employee = models.Employee || model('Employee', EmployeeSchema);
