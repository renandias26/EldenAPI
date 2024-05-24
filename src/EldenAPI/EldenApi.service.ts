import { AxiosError } from "axios";
import { map } from "rxjs/internal/operators/map";
import { firstValueFrom } from "rxjs/internal/firstValueFrom";
import { HttpService } from "@nestjs/axios/dist/http.service";
import { catchError } from "rxjs/internal/operators/catchError";
import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";

@Injectable()
export class EldenAPIService {
    constructor(
        private readonly httpService: HttpService,
    ) { }

    get<T>(url: string, parameters: URLSearchParams = null) {
        return firstValueFrom(
            this.httpService.get<T>(url, { params: parameters })
                .pipe(map(item => item.data))
                .pipe(catchError((error: AxiosError) => {
                    console.log(error)
                    throw 'An error happened!';
                })
                )
        )
    }
}
