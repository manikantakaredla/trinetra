import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role', { enum: ['admin', 'police', 'viewer'] }).notNull().default('police'),
  createdAt: text('created_at').notNull().default("CURRENT_TIMESTAMP"),
});

export const vehicles = sqliteTable('vehicles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  plateNumber: text('plate_number').notNull(),
  vehicleType: text('vehicle_type'),
  color: text('color'),
  confidence: integer('confidence').notNull(),
  imageUrl: text('image_url').notNull(),
  timestamp: text('timestamp').notNull(),
  cameraId: integer('camera_id').references(() => cameras.id),
});

export const cameras = sqliteTable('cameras', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  latitude: text('latitude'),
  longitude: text('longitude'),
  location: text('location'),
  status: text('status', { enum: ['active', 'inactive', 'maintenance'] }).default('active'),
});

export const watchlist = sqliteTable('watchlist', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  plateNumber: text('plate_number').notNull().unique(),
  owner: text('owner'),
  caseNumber: text('case_number'),
  policeStation: text('police_station'),
  vehicleType: text('vehicle_type'),
  color: text('color'),
  status: text('status').default('wanted'),
  addedAt: text('added_at').notNull().default("CURRENT_TIMESTAMP"),
});

export const alerts = sqliteTable('alerts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  vehicleId: integer('vehicle_id').references(() => vehicles.id),
  watchlistId: integer('watchlist_id').references(() => watchlist.id),
  status: text('status', { enum: ['unread', 'read', 'resolved'] }).default('unread'),
  createdAt: text('created_at').notNull().default("CURRENT_TIMESTAMP"),
});

export const investigations = sqliteTable('investigations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description'),
  officerId: integer('officer_id').references(() => users.id),
  status: text('status', { enum: ['open', 'in_progress', 'closed'] }).default('open'),
  createdAt: text('created_at').notNull().default("CURRENT_TIMESTAMP"),
});
