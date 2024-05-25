import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
// import { CookieService } from 'ngx-cookie-service';
import * as mockRaw from '../../../data/user.json';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any = (mockRaw as any).default;
  let httpClientSpy:{post:jasmine.Spy};
  let cookieServiceSpy:{set:jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('httpClient',['post']);
    cookieServiceSpy = jasmine.createSpyObj('CookieService',['set']);
    service = new AuthService(httpClientSpy as any, cookieServiceSpy as any)
    // service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Test for sendCredentials
  it('Debe de retornar un objeto con "data" y "tokenSession"',(done:DoneFn)=>{
    const user:any = mockUser.userOk;
    const mockResponse = {
      data:{},
      tokenSession:'0x0x0x0x'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    );

    service.sendCredentials(user.email, user.password).subscribe(responseApi => {
      const getProperties = Object.keys(responseApi);
      expect(getProperties).toContain('data');
      expect(getProperties).toContain('tokenSession');
      done();
    });


  });
});
