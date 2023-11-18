package com.example.Medsos;

import com.example.Medsos.controllers.DataRepository;
import com.example.Medsos.controllers.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import lombok.extern.slf4j.Slf4j;
import java.net.InetAddress;
@Slf4j
@SpringBootApplication
public class MedsosApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedsosApplication.class, args);
	}
	@Bean
	CommandLineRunner cliRunner(ApplicationContext ctx) {
		return ars -> {
			String[] strings = new String[]{
					"\n\n\n",
					"**************************************************************************"
							+ "********************",
					"Application has successfully started and serving the following endpoints for "
							+ "your convenience:",
					"-------------------------------         HAPPY HACKING  ;)      ------------"
							+ "-------------------",
					"****************************************************************************"
							+ "******************",
					"\n\n\n"
			};
			log.info(String.join("\n", strings));
		};
	}

}
