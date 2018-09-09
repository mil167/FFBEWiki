package mli.example.ffbe;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Controller
public class FFBEController implements WebMvcConfigurer{
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
