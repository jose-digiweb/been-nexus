ALTER TABLE `place` ADD `user_id` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `placeLog` ADD `user_id` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `placeLogImage` ADD `user_id` integer NOT NULL;