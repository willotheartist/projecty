-- Add optional auth fields to User

ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "name" TEXT,
ADD COLUMN IF NOT EXISTS "passwordHash" TEXT;
