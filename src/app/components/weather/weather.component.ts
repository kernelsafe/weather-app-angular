import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { WeatherService } from '../../services/weather.service'
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup
  isLoading = false
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherForm = new FormGroup({
      temperature: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }

  onSubmit() {
    if (!this.weatherForm.valid) {
      return
    }
    this.isLoading = true
    this.weatherService.addTemperature(this.weatherForm.value.temperature)
      .pipe(finalize(() => {
        this.isLoading = false
      })).subscribe(() => {
        this.weatherForm.setValue({ temperature: 0 })
        this.weatherService.temperatureAdded.next(true)
      }, err => {
        console.log('add temperature error', err)
      })
  }

}
