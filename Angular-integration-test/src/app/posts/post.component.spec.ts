import { HttpClient, HttpHandler } from "@angular/common/http";
import { EMPTY, of } from "rxjs";
import { PostsComponent } from "./post.component"
import { PostsService } from "./post.service";

describe('PostsComponent', () => {
    let component: PostsComponent;
    let service: PostsService;

    beforeEach( () => {
        service = new PostsService(null);
        component = new PostsComponent(service);
    })

    it('Should call fetch and ngInInit', () => {
        const spy = spyOn(service, 'fetch').and.callFake( () => {
            return EMPTY;
        });

        component.ngOnInit();

        expect(spy).toHaveBeenCalled();
    })

    it('Should update posts lenght after ngOnInit', () => {
        const postss = [1,2,3];
        spyOn(service, 'fetch').and.returnValue(of(postss));

        component.ngOnInit();

        expect(component.posts.length).toBe(postss.length );
    })
  
  })
  