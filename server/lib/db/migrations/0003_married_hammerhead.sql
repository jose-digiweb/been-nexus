PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_place` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`description` text,
	`lat` real NOT NULL,
	`long` real NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_place`("id", "name", "slug", "description", "lat", "long", "user_id", "created_at", "updated_at") SELECT "id", "name", "slug", "description", "lat", "long", "user_id", "created_at", "updated_at" FROM `place`;--> statement-breakpoint
DROP TABLE `place`;--> statement-breakpoint
ALTER TABLE `__new_place` RENAME TO `place`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `place_slug_unique` ON `place` (`slug`);--> statement-breakpoint
CREATE TABLE `__new_placeLog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`lat` real NOT NULL,
	`lng` real NOT NULL,
	`started_at` integer NOT NULL,
	`ended_at` integer NOT NULL,
	`user_id` text NOT NULL,
	`place_id` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`place_id`) REFERENCES `place`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_placeLog`("id", "name", "description", "lat", "lng", "started_at", "ended_at", "user_id", "place_id", "created_at", "updated_at") SELECT "id", "name", "description", "lat", "lng", "started_at", "ended_at", "user_id", "place_id", "created_at", "updated_at" FROM `placeLog`;--> statement-breakpoint
DROP TABLE `placeLog`;--> statement-breakpoint
ALTER TABLE `__new_placeLog` RENAME TO `placeLog`;--> statement-breakpoint
CREATE TABLE `__new_placeLogImage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`key` text NOT NULL,
	`place_log_id` integer NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	FOREIGN KEY (`place_log_id`) REFERENCES `placeLog`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_placeLogImage`("id", "key", "place_log_id", "user_id", "created_at", "updated_at") SELECT "id", "key", "place_log_id", "user_id", "created_at", "updated_at" FROM `placeLogImage`;--> statement-breakpoint
DROP TABLE `placeLogImage`;--> statement-breakpoint
ALTER TABLE `__new_placeLogImage` RENAME TO `placeLogImage`;