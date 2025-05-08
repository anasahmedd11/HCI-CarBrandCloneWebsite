import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleModel } from '../Model/vehicle';
import { CartService } from '../services/cart.service';
import { ColorService } from '../services/color.service';
import { ModelsService } from '../services/models.service';

@Component({
  selector: 'app-carmodels-details-page',
  templateUrl: './carmodels-details-page.component.html',
  styleUrl: './carmodels-details-page.component.scss'
})
export class CarmodelsDetailsPageComponent {
  carModelDetails: VehicleModel | undefined;

  constructor(private route: ActivatedRoute, private modelService: ModelsService, private colorService: ColorService, private cartService: CartService){
    const modelId = Number(this.route.snapshot.paramMap.get('id'));
    this.carModelDetails = this.modelService.getModelById(modelId);
  }

  getColorHex(colorName: string): string {
    return this.colorService.getColorHex(colorName);
  }

  addToCart(model: VehicleModel) {
    this.cartService.addToCart({
      id: model.id,
      name: model.name,
      price: model.price,
      quantity: 1
    });
  }
}
