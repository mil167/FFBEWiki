package mli.example.ffbe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FFBEController {
	@RequestMapping("/weapon")
	public String weapon() {
		return "WeaponView";
	}
	
	@RequestMapping("/armor")
	public String armor() {
		return "ArmorView";
	}
	
	@RequestMapping("/accessory")
	public String accessory() {
		return "AccessoryView";
	}
	
}
