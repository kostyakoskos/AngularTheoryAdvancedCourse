import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EMPTY, of } from "rxjs";
import { PostsComponent } from "./post.component"
import { PostsService } from "./post.service";

describe('PostsComponent', () => {
    let fixture: ComponentFixture<PostsComponent>
    let component: PostsComponent;
    let service: PostsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostsComponent],
            providers: [PostsService],
            imports: [HttpClientModule]
        })

        service = TestBed.get(PostsService);

        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
    })

    it('ngOnInit automatically call', () => {
        const posts: string[] = ['1', '2', '3']
        spyOn(service, 'fetch').and.returnValue(of(posts));
        fixture.detectChanges();
        expect(component.posts).toEqual(posts);
    })

})
