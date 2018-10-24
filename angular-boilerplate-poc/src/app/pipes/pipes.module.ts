import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DateFormatterPipe } from "./date-formatter.pipe";
import { EllipsisFormatterPipe } from "./ellipsis-formatter.pipe";

@NgModule({
    declarations: [
        DateFormatterPipe,
        EllipsisFormatterPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DateFormatterPipe,
        EllipsisFormatterPipe
    ]
})
export class PipesModule {}